interface DateNotifiedProps {
  dates: Date[];
  lastCutie: Date;
}

const DateNotified = ({ dates, lastCutie }: DateNotifiedProps) => {
  let nextNotified;
  const datesRef = dates;
  const lastCutieRef = new Date(lastCutie);
  if (datesRef.length >= 3) {
    let dateDiffs = [];
    for (let i = 1; i < datesRef.length; i++) {
      const diffTime = Math.abs(
        new Date(datesRef[i]).getTime() - new Date(datesRef[i - 1]).getTime()
      );
      dateDiffs.push(diffTime);
    }
    const minDateDiff = Math.min(...dateDiffs);
    nextNotified = new Date(lastCutieRef.getTime() + minDateDiff);
  }
  return nextNotified;
};

export default DateNotified;
