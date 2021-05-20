// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var contact_pb = require('./contact_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_georgeben_phonebook_Contact(arg) {
  if (!(arg instanceof contact_pb.Contact)) {
    throw new Error('Expected argument of type georgeben.phonebook.Contact');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_georgeben_phonebook_Contact(buffer_arg) {
  return contact_pb.Contact.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_georgeben_phonebook_ContactList(arg) {
  if (!(arg instanceof contact_pb.ContactList)) {
    throw new Error('Expected argument of type georgeben.phonebook.ContactList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_georgeben_phonebook_ContactList(buffer_arg) {
  return contact_pb.ContactList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_georgeben_phonebook_createContactRequest(arg) {
  if (!(arg instanceof contact_pb.createContactRequest)) {
    throw new Error('Expected argument of type georgeben.phonebook.createContactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_georgeben_phonebook_createContactRequest(buffer_arg) {
  return contact_pb.createContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var PhonebookService = exports.PhonebookService = {
  createContact: {
    path: '/georgeben.phonebook.Phonebook/createContact',
    requestStream: false,
    responseStream: false,
    requestType: contact_pb.createContactRequest,
    responseType: contact_pb.Contact,
    requestSerialize: serialize_georgeben_phonebook_createContactRequest,
    requestDeserialize: deserialize_georgeben_phonebook_createContactRequest,
    responseSerialize: serialize_georgeben_phonebook_Contact,
    responseDeserialize: deserialize_georgeben_phonebook_Contact,
  },
  getContacts: {
    path: '/georgeben.phonebook.Phonebook/getContacts',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: contact_pb.ContactList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_georgeben_phonebook_ContactList,
    responseDeserialize: deserialize_georgeben_phonebook_ContactList,
  },
  getContactStream: {
    path: '/georgeben.phonebook.Phonebook/getContactStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: contact_pb.Contact,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_georgeben_phonebook_Contact,
    responseDeserialize: deserialize_georgeben_phonebook_Contact,
  },
};

exports.PhonebookClient = grpc.makeGenericClientConstructor(PhonebookService);
