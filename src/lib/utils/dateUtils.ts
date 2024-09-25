import { format as dateFnsFormat } from "date-fns";
import { es } from "date-fns/locale";

export function format(date: Date, format: string): string {
	return dateFnsFormat(date, format, { locale: es });
}
