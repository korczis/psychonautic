+++
title = "Table Test"
description = "Quick test for sortable table functionality"
date = 2026-01-30
draft = true

[extra]
lead = "Testing sortable table implementation"
+++

# Table Component Test

Simple test to verify the sortable table components are working correctly.

## Basic CSV Table

{{ csv_table(
    id="test-table",
    title="Test Data",
    csv_data="
název,typ,hodnota
Alpha,Type A,100
Beta,Type B,200
Gamma,Type A,150
Delta,Type C,75
",
    searchable=true,
    exportable=true
) }}

If you can see the interactive table above with search, sorting, and export functionality, the implementation is working correctly!