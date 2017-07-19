#!/usr/bin/env bash


is_unit() {
  [[ "${MODE}" = unit ]]
}

is_e2e() {
  [[ "${MODE}" = e2e ]]
}

is_e2e_cits() {
  [[ "${MODE}" = e2e_cits ]]
}
