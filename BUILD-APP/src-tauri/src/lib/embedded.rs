use serde::Serialize;

/// Biner DLL `kit_app_rust.dll` yang ditanamkan secara statis ke dalam executable
#[used]
pub static EMBEDDED_DLL: &[u8] = include_bytes!("../../../../ASSETS/dll/kit_app_rust.dll");

#[derive(Serialize, Clone, Debug)]
pub struct EmbeddedDllInfo {
    pub name: String,
    pub size_bytes: usize,
    pub is_embedded: bool,
}

impl Default for EmbeddedDllInfo {
    fn default() -> Self {
        Self {
            name: "kit_app_rust.dll".to_string(),
            size_bytes: EMBEDDED_DLL.len(),
            is_embedded: true,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_embedded_dll_bytes() {
        assert!(EMBEDDED_DLL.len() > 1000);
        assert_eq!(&EMBEDDED_DLL[0..2], b"MZ");
    }
}
