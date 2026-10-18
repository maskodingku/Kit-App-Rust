//! Kit App Rust CDYLIB (Windows DLL)
//! Arsitektur modular tingkat atom sesuai aturan nomor 3.

#[path = "lib/mod.rs"]
pub mod lib;

pub use lib::*;
