import { Permissions } from 'src/app/interfaces/Permissions';
import { Roles } from 'src/app/interfaces/Roles';

export class TableColumnFormatters {
  static formatRoles(roles: Roles[]): string {
    if (!Array.isArray(roles)) return '';
    return roles
      .map((role) => (typeof role === 'string' ? role : role.display_name))
      .join(', ');
  }

  static formatPermissions(permissions: Permissions[]): string {
    if (!Array.isArray(permissions)) return '';
    return permissions
      .map((perm) => (typeof perm === 'string' ? perm : perm.display_name))
      .join(', ');
  }
static formatPhoneNumber(phone: string): string {
    if (!phone) return '';
    
    const cleaned = phone.replace(/\D/g, '');
    
    // Format avec 11 chiffres (ex: Pakistan)
    const match11 = cleaned.match(/^(\d{2})(\d{2})(\d{3})(\d{4})$/);
    if (match11) {
        return `+${match11[1]} ${match11[2]} ${match11[3]} ${match11[4]}`;
    }
    
    // Format avec 12 chiffres (ex: Italie)
    const match12 = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/);
    if (match12) {
        return `+${match12[1]} (${match12[2]}) ${match12[3]}-${match12[4]}`;
    }
    
    return phone;
}

}
