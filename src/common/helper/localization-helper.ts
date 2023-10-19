import { useTranslation } from "react-i18next"

export const getTranslater = function getTranslater(localeNameSpace?: string, keyPrefix?: string) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation(localeNameSpace ?? 'common', { keyPrefix });
    return t;
}