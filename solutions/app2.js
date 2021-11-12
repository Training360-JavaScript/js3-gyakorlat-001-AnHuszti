/* Objektum neve: `HU`
- Export: a HU objektum legyen a default export!
- Készíts egy `HU` nevű objektumot, amelynek az alábbi property-jei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően.
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt.
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: "első, második és harmadik" 
(tehát vesszővel elválasztva, az utolsó elem előtt az "és" szóval).
 */

'use strict';




const HU = {
    date(theDate) {
        return new Intl.DateTimeFormat('hu-HU').format(theDate)
    },
    curreny(theMoney) {
        return new Intl.NumberFormat('hu-Hu', { style: 'currency', currency: 'HUF' }).format(theMoney)
    },
    list(theList) {
        return new Intl.ListFormat('hu-HU', { style: 'long', type: 'conjunction' }).format(theList)
    }
};

export default HU
