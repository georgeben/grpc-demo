const grpc = require("@grpc/grpc-js");
const messages = require("./generated/contact_pb");
const services = require("./generated/contact_grpc_pb");
const { Empty } = require('google-protobuf/google/protobuf/empty_pb.js');

const client = new services.PhonebookClient("localhost:30123", grpc.credentials.createInsecure());

function runCreateContact() {
  const request = new messages.createContactRequest();
  request.setName("James Bond");
  request.setPhonenumber("777");
  client.createContact(request, (err, result) => {
    if (err) {
      return console.log("An error occurred while creating contact", err);
    }
    console.log("Successfully created contact", result.toObject());
  })
}

function runGetContactStream() {
  const call = client.getContactStream(new Empty() );
  call.on("data", (c) => console.log("Received contact", c.toObject()));
  call.on("end", () => console.log("Finished receiving contacts"));
  call.on("error", (err) => console.log("An error occurred while reading stream", err))
}

runCreateContact();
runGetContactStream()