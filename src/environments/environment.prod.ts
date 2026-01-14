export const environment = {
  production: true,
  apiUrl: "http://server.192.168.1.10.sslip.io/api",
  max_file_size: 1 * 1024 * 1024, // 1 Mo in bytes

  // Configuration Pusher
  pusher_app_key: 'N05XWXhvS3NpM2NEQlFNSFVwQzQ2cTRJUEdxTnE0V1BwN2lOMzRrZ1BMYUgxdHNBQkE5M3lpN0VGWWUxWTJxag==',
  pusher_host: 'soketi.192.168.1.10.sslip.io',
  pusher_port_dev: 80,
  pusher_port_prod: 443,
  pusher_schemeWS: "ws",
  pusher_schemeWSS: "wss",
  cluster: "mt1",

  // Pagination par défaut
  current_page: 1,
  pageSize: 5,
  total: 10,
  total_user_blocked: 10,

  // nombre maximaum de show more
  max_show_more: 10,

  // Extensions d'images (MIME types)
  extensions_image: [
    'image/png',        // PNG
    'image/jpeg',       // JPEG
    'image/jpg',        // JPG (note: 'image/jpg' n'est pas standard, 'image/jpeg' est préféré)
    'image/gif',        // GIF
    'image/webp',       // WebP
    'image/svg+xml',    // SVG
    'image/bmp',        // BMP
    'image/tiff',       // TIFF
    'image/x-icon',     // ICO
    'image/vnd.microsoft.icon' // ICO
  ],
  extensions_files: [
    'application/pdf',                          // PDF
    'application/msword',                       // DOC (Word ancien)
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX (Word moderne)
    'application/vnd.ms-excel',                 // XLS (Excel ancien)
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLSX (Excel moderne)
    'application/vnd.ms-powerpoint',            // PPT (PowerPoint ancien)
    'application/vnd.openxmlformats-officedocument.presentationml.presentation', // PPTX (PowerPoint moderne)
    'text/plain',                               // TXT
    'text/csv',                                 // CSV
    'application/zip',                          // ZIP
  ],
};
