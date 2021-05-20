grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./static/generated --grpc_out=grpc_js:./static/generated contact.proto

protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=./static/generated contact.proto