type Props = {
  daysAgo: number;
}

export const Counter = ({daysAgo}: Props) => {

  let daysSinceCrash = daysAgo;
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