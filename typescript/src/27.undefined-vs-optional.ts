function logOptional(message?: string) {
  console.log(message);
}

logOptional(undefined);
logOptional();

function logUndefined(message: string | undefined) {
  console.log(message);
}

logUndefined(undefined);
logUndefined(); // Error: Expected 1 arguments, 'message' was not provided.
