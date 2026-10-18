/// Mengembalikan versi DLL (misalnya 100 untuk v1.0.0)
#[no_mangle]
pub extern "C" fn get_dll_version() -> i32 {
    100
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_version() {
        assert_eq!(get_dll_version(), 100);
    }
}
