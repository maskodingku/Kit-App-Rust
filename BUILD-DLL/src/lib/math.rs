/// Menjumlahkan dua bilangan bulat 32-bit
#[no_mangle]
pub extern "C" fn add_numbers(a: i32, b: i32) -> i32 {
    a + b
}

/// Mengalikan dua bilangan pecahan 64-bit (double)
#[no_mangle]
pub extern "C" fn multiply_numbers(a: f64, b: f64) -> f64 {
    a * b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add_numbers(10, 20), 30);
    }

    #[test]
    fn test_multiply() {
        let res = multiply_numbers(2.5, 4.0);
        assert!((res - 10.0).abs() < 1e-9);
    }
}
