type Props = {
  date: Date;
}

export const Counter = ({date}: Props) => {
  let daysSinceCrash = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  let digits: number[] = [];
  do {
    digits = [daysSinceCrash % 10, ...digits];
    daysSinceCrash = Math.floor(daysSinceCrash / 10);
  } while (daysSinceCrash > 0);

  return (
    <div className="flex space-x-2">
      {digits.map((digit, index) => (
        <div key={index} className="bg-black rounded-lg px-5 py-8 text-white text-5xl">
          {digit}
        </div>
      ))}
    </div>
  )
}