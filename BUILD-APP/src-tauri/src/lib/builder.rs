use crate::*;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_log::Builder::default().build())
        .invoke_handler(tauri::generate_handler![
            get_embedded_dll_info,
            extract_embedded_dll
        ])
        .run(tauri::generate_context!())
        .expect("error while building tauri application");
}
