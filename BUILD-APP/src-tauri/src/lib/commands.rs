use super::embedded::{EmbeddedDllInfo, EMBEDDED_DLL};

/// Mendapatkan informasi tentang DLL yang ditanamkan
#[tauri::command]
pub fn get_embedded_dll_info() -> EmbeddedDllInfo {
    EmbeddedDllInfo::default()
}

/// Mengekstrak file DLL dari memori jika diperlukan oleh host eksternal
#[tauri::command]
pub fn extract_embedded_dll(destination_path: String) -> Result<usize, String> {
    std::fs::write(&destination_path, EMBEDDED_DLL).map_err(|e| e.to_string())?;
    Ok(EMBEDDED_DLL.len())
}
