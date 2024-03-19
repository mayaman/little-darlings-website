const { utils } = require("ethers");
const fs = require("fs");

// Read data into a single array
const sheet = fs.readFileSync("./allowlist-sheet.csv", "utf8").split("\n");
const fitymi = fs.readFileSync("./allowlist-fitymi.csv", "utf8").split("\n");
const vip = fs.readFileSync("./allowlist-vip.csv", "utf8").split("\n");

// Combine the CSV files into a single array
const combinedAllowlist = [].concat(vip, sheet, fitymi);
const combinedVip = [].concat(vip);
console.log("combined allowlist", combinedAllowlist.length);
console.log("combined vip", combinedVip.length);

// Check if the addresses in the combined array are unique
var uniqueAllowlist = [...new Set(combinedAllowlist)];
var uniqueVip = [...new Set(combinedVip)];
console.log("unique allowlist", uniqueAllowlist.length);
console.log("unique vip", uniqueVip.length);

// Check if the strings are valid Ethereum addresses using ethers.js
var validAllowlist = [];
for (var i = 0; i < uniqueAllowlist.length; i++) {
  if (utils.isAddress(uniqueAllowlist[i])) {
    // Convert address to proper case
    validAllowlist.push(utils.getAddress(uniqueAllowlist[i]));
  }
}
var validVip = [];
for (var i = 0; i < uniqueVip.length; i++) {
  if (utils.isAddress(uniqueVip[i])) {
    // Convert address to proper case
    validVip.push(utils.getAddress(uniqueVip[i]));
  }
}
console.log("valid allowlist", validAllowlist.length);
console.log("valid vip", validVip.length);

// Store invalid addresses in a separate array
var invalidAllowlist = [];
for (var i = 0; i < uniqueAllowlist.length; i++) {
  if (!utils.isAddress(uniqueAllowlist[i])) {
    invalidAllowlist.push(uniqueAllowlist[i]);
  }
}
var invalidVip = [];
for (var i = 0; i < uniqueVip.length; i++) {
  if (!utils.isAddress(uniqueVip[i])) {
    invalidVip.push(uniqueVip[i]);
  }
}
console.log("invalid", invalidAllowlist);
console.log("invalid", invalidVip);

// Save the array as a json file named allowlistPaidMint.json
fs.writeFile(
  "allowlistPaidMint.json",
  JSON.stringify(validAllowlist),
  function (err) {
    if (err) throw err;
    console.log("Paid mint list saved!");
  }
);
fs.writeFile(
  "allowlistFreeMint.json",
  JSON.stringify(validVip),
  function (err) {
    if (err) throw err;
    console.log("Free mint list saved!");
  }
);
