//! Kit App Rust Tauri Desktop Runtime Library
//! Arsitektur modular tingkat atom sesuai aturan nomor 3.

#[path = "lib/mod.rs"]
pub mod lib;

pub use lib::builder::run;
pub use lib::commands::*;
pub use lib::embedded::*;
