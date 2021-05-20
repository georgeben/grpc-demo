const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("contact.proto");
const packageObject = grpc.loadPackageDefinition(packageDefinition);
const phonebook = packageObject.georgeben.phonebook;

const server = new grpc.Server();
server.bindAsync("0.0.0.0:4000", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.log("Failed to bind gRPC server to port", err);
    process.exit(1);
  }
  server.start();
  console.log("gRPC server started on PORT", port)
});

server.addService(phonebook.Phonebook.service, {
  "createContact": createContact,
  "getContacts": getContacts,
  'getContactStream': getContactStream,
});

const db = {
  contacts: []
}

function createContact(call, callback) {
  const { request } = call;
  const contact = {
    id: db.contacts.length += 1,
    name: request.name,
    phoneNumber: request.phoneNumber,
  }
  db.contacts.push(contact)
  callback(null, contact)
}

function getContacts(call, callback) {
  callback(null, { contacts: db.contacts.filter((el) => el != null) })
}

function getContactStream(call) {
  db.contacts.forEach((el) => call.write(el));
  call.end();
}

