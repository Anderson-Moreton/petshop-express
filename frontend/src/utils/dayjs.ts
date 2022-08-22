import $dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import calendar from 'dayjs/plugin/calendar';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import minMax from 'dayjs/plugin/minMax';
import duration from 'dayjs/plugin/duration';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import ptbr from 'dayjs/locale/pt-br';
import isBefore from 'dayjs/plugin/isSameOrBefore';

const language = localStorage.getItem('language') || 'pt';

const locale = language === 'pt' ? ptbr : language;

$dayjs.locale(locale);

$dayjs.extend(advancedFormat);
$dayjs.extend(calendar);
$dayjs.extend(customParseFormat);
$dayjs.extend(localeData);
$dayjs.extend(localizedFormat);
$dayjs.extend(isToday);
$dayjs.extend(isYesterday);
$dayjs.extend(minMax);
$dayjs.extend(duration);
$dayjs.extend(isBefore);

$dayjs.extend(weekOfYear);

export default $dayjs;
