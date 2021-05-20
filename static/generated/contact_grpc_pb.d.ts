// package: georgeben.phonebook
// file: contact.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as contact_pb from "./contact_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPhonebookService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createContact: IPhonebookService_IcreateContact;
    getContacts: IPhonebookService_IgetContacts;
    getContactStream: IPhonebookService_IgetContactStream;
}

interface IPhonebookService_IcreateContact extends grpc.MethodDefinition<contact_pb.createContactRequest, contact_pb.Contact> {
    path: "/georgeben.phonebook.Phonebook/createContact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contact_pb.createContactRequest>;
    requestDeserialize: grpc.deserialize<contact_pb.createContactRequest>;
    responseSerialize: grpc.serialize<contact_pb.Contact>;
    responseDeserialize: grpc.deserialize<contact_pb.Contact>;
}
interface IPhonebookService_IgetContacts extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, contact_pb.ContactList> {
    path: "/georgeben.phonebook.Phonebook/getContacts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<contact_pb.ContactList>;
    responseDeserialize: grpc.deserialize<contact_pb.ContactList>;
}
interface IPhonebookService_IgetContactStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, contact_pb.Contact> {
    path: "/georgeben.phonebook.Phonebook/getContactStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<contact_pb.Contact>;
    responseDeserialize: grpc.deserialize<contact_pb.Contact>;
}

export const PhonebookService: IPhonebookService;

export interface IPhonebookServer {
    createContact: grpc.handleUnaryCall<contact_pb.createContactRequest, contact_pb.Contact>;
    getContacts: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, contact_pb.ContactList>;
    getContactStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, contact_pb.Contact>;
}

export interface IPhonebookClient {
    createContact(request: contact_pb.createContactRequest, callback: (error: grpc.ServiceError | null, response: contact_pb.Contact) => void): grpc.ClientUnaryCall;
    createContact(request: contact_pb.createContactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contact_pb.Contact) => void): grpc.ClientUnaryCall;
    createContact(request: contact_pb.createContactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contact_pb.Contact) => void): grpc.ClientUnaryCall;
    getContacts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: contact_pb.ContactList) => void): grpc.ClientUnaryCall;
    getContacts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contact_pb.ContactList) => void): grpc.ClientUnaryCall;
    getContacts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contact_pb.ContactList) => void): grpc.ClientUnaryCall;
    getContactStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<contact_pb.Contact>;
    getContactStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<contact_pb.Contact>;
}

export class PhonebookClient extends grpc.Client implements IPhonebookClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createContact(request: contact_pb.createContactRequest, callback: (error: grpc.ServiceError | null, response: contact_pb.Contact) => void): grpc.ClientUnaryCall;
    public createContact(request: contact_pb.createContactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contact_pb.Contact) => void): grpc.ClientUnaryCall;
    public createContact(request: contact_pb.createContactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contact_pb.Contact) => void): grpc.ClientUnaryCall;
    public getContacts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: contact_pb.ContactList) => void): grpc.ClientUnaryCall;
    public getContacts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contact_pb.ContactList) => void): grpc.ClientUnaryCall;
    public getContacts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contact_pb.ContactList) => void): grpc.ClientUnaryCall;
    public getContactStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<contact_pb.Contact>;
    public getContactStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<contact_pb.Contact>;
}
