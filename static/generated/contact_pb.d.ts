// package: georgeben.phonebook
// file: contact.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Contact extends jspb.Message { 
    getId(): number;
    setId(value: number): Contact;
    getName(): string;
    setName(value: string): Contact;
    getPhonenumber(): string;
    setPhonenumber(value: string): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
    export type AsObject = {
        id: number,
        name: string,
        phonenumber: string,
    }
}

export class createContactRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): createContactRequest;
    getPhonenumber(): string;
    setPhonenumber(value: string): createContactRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): createContactRequest.AsObject;
    static toObject(includeInstance: boolean, msg: createContactRequest): createContactRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: createContactRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): createContactRequest;
    static deserializeBinaryFromReader(message: createContactRequest, reader: jspb.BinaryReader): createContactRequest;
}

export namespace createContactRequest {
    export type AsObject = {
        name: string,
        phonenumber: string,
    }
}

export class ContactList extends jspb.Message { 
    clearContactsList(): void;
    getContactsList(): Array<Contact>;
    setContactsList(value: Array<Contact>): ContactList;
    addContacts(value?: Contact, index?: number): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContactList.AsObject;
    static toObject(includeInstance: boolean, msg: ContactList): ContactList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContactList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContactList;
    static deserializeBinaryFromReader(message: ContactList, reader: jspb.BinaryReader): ContactList;
}

export namespace ContactList {
    export type AsObject = {
        contactsList: Array<Contact.AsObject>,
    }
}
