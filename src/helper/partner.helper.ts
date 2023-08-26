import { PARTNER_CATEGORY_ITEMS } from '@/contants/partner-category.contant'

export class PartnerHelper {
    getCategoryNameById(id: number | string) {
        const category = PARTNER_CATEGORY_ITEMS.find(({ value }) => value == id)
        return category?.label || ''
    }
}
