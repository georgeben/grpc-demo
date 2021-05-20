const grpc = require("@grpc/grpc-js");
const messages = require("./generated/contact_pb");
const services = require("./generated/contact_grpc_pb");

const contactsDB = [];

function createContact(call, callback) {
  const contact = new messages.Contact();
  contact.setId(++contactsDB.length);
  contact.setName(call.request.getName());
  contact.setPhonenumber(call.request.getPhonenumber());

  contactsDB.push(contact);
  callback(null, contact);
}

function getContactStream(call) {
  contactsDB.forEach((c) => call.write(c));
  call.end();
}

function createServer() {
  const server = new grpc.Server();
  server.addService(services.PhonebookService, {
    createContact,
    getContactStream,
  });
  return server;
}

const server = createServer();
server.bindAsync(
  "0.0.0.0:30123",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.log("Failed to bind gRPC server to port");
    }
    server.start();
    console.log(`gRPC server started on port ${port}`);
  },
);
