This repository contains all necessary files for generating and verifying a proof that:

The prover knows a number "x" such that SHA256(x) = w

The majority of files found here are a subset of the CircomLib repository: https://github.com/iden3/circom

# Organization

This respository contains 4 folders:
- `circuits`: it contains the implementation of SHA256 in circom language.
- `test`: tests.
- `helpers`: supplemental functions for tests.
- `node_modules`: nodejs modules for tests.

# How to run the code
## Verifier setup

circom test/circuits/sha256_test448.circom --r1cs --wasm

snarkjs plonk setup sha256_test448.r1cs powersOfTau28_hez_final_18.ptau circuit_final.zkey

You'll need to download the powersOfTau_hez_final_18.ptau file here: https://www.google.com/url?q=https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_18.ptau&sa=D&source=docs&ust=1683154161962057&usg=AOvVaw2JmddQTkLDk99qTNQKNZ3j

## Prover setup

node test/generate_hash_input.js  

snarkjs wtns calculate sha256_test448_js/sha256_test448.wasm test_input.json witness.wtns

## Generate proof and verify proof

snarkjs plonk prove sha256_final.zkey witness.wtns proof.json public.json

snarkjs zkey export verificationkey sha256_final.zkey verification_key.json




