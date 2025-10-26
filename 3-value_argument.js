#!/usr/bin/node

const arg = process.argv[2];  // The first real argument is at index 2

if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
