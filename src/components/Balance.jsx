export default function Balance({ balance }) {
  const formattedNumber = Number(balance).toFixed(2);
  return (
    <>
      <div className="text-xl font-medium mt-10 ml-10">
        Your balance Rs {formattedNumber}
      </div>
    </>
  );
}
