import { timeTypeBlocks } from "@/type";
import { ColorValue } from "react-native";

export function groupItemsByStartHour(items: timeTypeBlocks[]) {
  const toMinutes = (time: string) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const toHours = (minutes: number) => minutes / 60;

  // Primero obtenemos las horas involucradas como base
  const involvedHours = new Set<string>();
  for (const { start, end } of items) {
    let startMin = toMinutes(start);
    const endMin = toMinutes(end);
    while (startMin <= endMin) {
      const hourStr = `${String(Math.floor(startMin / 60)).padStart(2, '0')}:00`;
      involvedHours.add(hourStr);
      startMin += 60;
    }
  }

  // Ahora agrupamos por hora de inicio
  const grouped = Array.from(involvedHours)
    .sort()
    .map((hora) => {
      const materias = items
        .filter((item) => item.start === hora)
        .map((item) => ({
          ...item,
          duracion: toHours(toMinutes(item.end) - toMinutes(item.start)),
        }));

      return {
        hora,
        materias,
      };
    });

  return grouped;
}
