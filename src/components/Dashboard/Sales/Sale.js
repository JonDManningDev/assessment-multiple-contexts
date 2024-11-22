function Sale({ sale, handleClose }) {
  const color = sale.closed ? "secondary" : "danger";
  const amount = new Intl.NumberFormat().format(sale.amountInDollars);

  return (
    <article
      className={`sale bg-${color}-subtle p-3 d-inline-flex flex-column text-center flex-grow-1`}
    >
      <p className="my-3 flex-fill ">
        {sale.company} - <small>${amount}</small>
      </p>
      <button className={`btn btn-sm btn-${color}`} onClick={() => handleClose(sale.id)}>
        {sale.closed ? "Re-open" : "Close "}
      </button>
    </article>
  );
}

export default Sale;
