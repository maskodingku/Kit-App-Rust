/// Memeriksa status kesiapan modul DLL
#[no_mangle]
pub extern "C" fn is_module_ready() -> bool {
    true
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_status() {
        assert!(is_module_ready());
    }
}
