# Bolt Gun Nation - WordPress Website

## Site Overview
This repository contains the WordPress installation for the Bolt Gun Nation website. This README provides documentation on the site structure and instructions for setting up a local development environment.

## Table of Contents
1. [Site Structure](#site-structure)
2. [Local Development Setup](#local-development-setup)
3. [Database Configuration](#database-configuration)
4. [Theme and Plugins](#theme-and-plugins)
5. [Making Improvements](#making-improvements)
6. [Deployment](#deployment)

## Site Structure

### Core WordPress Files
- `wp-admin/` - WordPress admin files
- `wp-includes/` - WordPress core files
- `wp-content/` - Themes, plugins, and uploads
- `wp-config.php` - WordPress configuration file

### Content Structure
- `wp-content/themes/twentytwentyfive/` - Active theme
- `wp-content/plugins/` - Installed plugins
- `wp-content/uploads/` - Media files organized by year (2023-2025)

### Key Plugins
- **SEO & Analytics**: WordPress SEO (Yoast), Google Site Kit
- **Security**: Jetpack (with WAF), Limit Login Attempts Reloaded, UpdraftPlus
- **Content & Design**: Divi Booster, Supreme Modules for Divi, EmbedPress, Custom Facebook Feed
- **User Experience**: Disable Comments, My Calendar

## Local Development Setup

### Prerequisites
- PHP 7.4+ (recommended: PHP 8.0+)
- MySQL 5.7+ or MariaDB 10.3+
- Web server (Apache or Nginx)
- [Composer](https://getcomposer.org/) (for dependency management)
- [Local development environment](https://localwp.com/) (recommended) or [XAMPP](https://www.apachefriends.org/), [MAMP](https://www.mamp.info/), etc.

### Option 1: Using Local by Flywheel (Recommended)

1. Install [Local](https://localwp.com/)
2. Create a new site:
   - Site name: "Bolt Gun Nation"
   - Environment: Custom (PHP 8.0+, MySQL 5.7+)
   - WordPress username/password: Create admin credentials

3. Stop the site after creation

4. Replace the `app/public` folder contents with this repository's files

5. Start the site

### Option 2: Manual Setup with XAMPP/MAMP

1. Install XAMPP or MAMP on your local machine

2. Create a database named `boltgun_local` in phpMyAdmin

3. Copy all files from this repository to your web server's document root (e.g., `htdocs/boltgun/`)

4. Create a new `wp-config.php` file based on `wp-config-sample.php` with your local database credentials:
   ```php
   define('DB_NAME', 'boltgun_local');
   define('DB_USER', 'root'); // default for local environments
   define('DB_PASSWORD', ''); // your password, often blank for local setups
   define('DB_HOST', 'localhost');
   ```

5. Access the site via `http://localhost/boltgun/` and complete the WordPress installation

## Database Configuration

### Import Production Database (if available)
1. Export the production database as SQL
2. Import into your local database using phpMyAdmin or command line:
   ```bash
   mysql -u username -p boltgun_local < database_export.sql
   ```

### Search and Replace URLs
After importing a production database, you'll need to replace the production URLs with local ones:
1. Use a tool like [WP-CLI](https://wp-cli.org/):
   ```bash
   wp search-replace 'https://boltgunnation.com' 'http://localhost/boltgun'
   ```
2. Or use a plugin like "Better Search Replace" after logging in

## Theme and Plugins

### Theme
The site currently uses the Twenty Twenty-Five theme. If you need to make theme customizations:
1. Create a child theme in `wp-content/themes/twentytwentyfive-child/`
2. Activate the child theme in WordPress admin

### Divi Integration
Several Divi-related plugins are installed, suggesting previous use of Divi:
- Divi Booster
- Supreme Modules for Divi

If you need to switch to Divi theme or use the Divi Builder, you'll need to purchase and install the Divi theme separately.

### Plugin Development
When developing custom functionality:
1. Create a new plugin in `wp-content/plugins/my-custom-plugin/`
2. Follow WordPress [plugin development standards](https://developer.wordpress.org/plugins/)

## Making Improvements

### Development Workflow
1. Create a new branch for your feature/fix
2. Make your changes locally
3. Test thoroughly
4. Document your changes

### Code Standards
Follow WordPress coding standards:
- [PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/)
- [CSS Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/)
- [JavaScript Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/)

### Debugging
To enable debugging during development, update wp-config.php:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Deployment

### Preparing for Deployment
1. Disable debugging
2. Optimize database
3. Clear caches
4. Test thoroughly

### Deployment Methods
1. **Manual FTP/SFTP**: Upload changed files to production server
2. **Git-based**: If your hosting supports it, push to a deployment branch
3. **Migration plugin**: Use UpdraftPlus or similar to migrate changes

### Post-Deployment
1. Test all functionality on the live site
2. Check for any broken links or images
3. Verify performance and security

---

## Additional Resources
- [WordPress Developer Documentation](https://developer.wordpress.org/)
- [WordPress Codex](https://codex.wordpress.org/)
- [WordPress.org Support](https://wordpress.org/support/)

## License
WordPress is released under the GPL license. See [license.txt](license.txt) for details.
