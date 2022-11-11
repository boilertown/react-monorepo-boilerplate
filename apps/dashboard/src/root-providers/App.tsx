import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import { RootRouter } from 'routes';

dayjs.extend(customParseFormat);
dayjs.extend(calendar);
dayjs.extend(utc);

export const App = () => {
	return <RootRouter />;
};

App.displayName = 'App.FluffyTomatoes';
