const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("contact.proto");
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const phonebook = protoDescriptor.georgeben.phonebook;

const client = new phonebook.Phonebook("localhost:4000", grpc.credentials.createInsecure());

function runCreateContact() {
  const payload = {
    name: "Kurobara",
    phoneNumber: "09081625142"
  };
  client.createContact(payload, (err, response) => {
    if (err) {
      return console.log("An error occurred while creating contact", err);
    }
    console.log("Created new contact", response)
  })
}

function runGetContacts() {
  client.getContacts(null, (err, response) => {
    if (err) {
      return console.log("An error occurred while fetching contacts", err);
    }
    console.log("Fetched all contacts", response);
  })
}

function runGetContactStream() {
  const call = client.getContactStream();
  call.on("data", (item) => console.log("Received contact", item));
  call.on("end", () => console.log("Finished receiving contact"));
  call.on("error", (err) => console.log("An error occurred when reading server stream", err));
  call.on("status", (status) => console.log("Server returned status: ", status))
}

runCreateContact()
runGetContactStream();

