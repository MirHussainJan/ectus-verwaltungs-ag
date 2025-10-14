const ArbitrageDetails = () => {
  return (
    <div className="px-8 py-20 flex justify-center">
      <div className="max-w-[1040px] text-black/80 font-light flex flex-col gap-8 md:gap-12">
        <div className="text-center w-full">
          <h2 className="text-2xl md:text-4xl text-center font-light mb-4 leading-normal">
            Arbitrage trading
          </h2>
          <p className="text-lg md:text-xl">
            <span className="mb-2 leading-normal">
              <b>Opportunities and challenges in the modern financial world</b>
            </span>
            <br />
            Arbitrage is the practice of exploiting price differences for the
            same asset across different markets to generate risk-free profits.
            By simultaneously buying and selling identical financial instruments
            on different trading venues, arbitrage can be an effective method
            for maximizing returns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#5f1718] text-xl font-normal">
              Advantages of arbitrage
            </h3>
            <ol className="list-decimal list-inside text-lg">
              <li>
                <b>Risk minimization:</b> One of the greatest strengths of
                arbitrage is its low risk. Because it involves exploiting price
                differences, the market is virtually risk-free, provided the
                transactions are executed correctly.
              </li>
              <li>
                <b>Increased efficiency:</b> Arbitrage contributes to market
                stability by helping to reduce price differences between markets
                and thus promotes price integration.
              </li>
              <li>
                <b>Profit potential:</b> For experienced traders, arbitrage
                offers the opportunity to make significant profits in a short
                period of time, depending on the size of the price differences.
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#5f1718] text-xl font-normal">
              Disadvantages of arbitrage
            </h3>
            <ol className="list-decimal list-inside text-lg">
              <li>
                <b>Low margins:</b> Because arbitrage relies on minimal price
                differences, profit margins are often very low. High trading
                volumes are necessary to generate significant returns.
              </li>
              <li>
                <b>Implementation costs:</b> The necessary infrastructure and
                transaction costs can be high, especially for the acquisition
                and maintenance of sophisticated technology.
              </li>
              <li>
                <b>Regulatory risks:</b> Different legal frameworks in different
                countries can make it difficult to conduct arbitrage
                transactions.
              </li>
            </ol>
          </div>
        </div>
        <div className="text-center w-full">
          <h2 className="text-2xl md:text-4xl text-center font-light mb-4 leading-normal">
            Our modern technology for arbitrage
          </h2>
          <p className="text-lg md:text-xl">
            In a rapidly changing financial market environment, the use of
            state-of-the-art technology is crucial for successfully executing
            arbitrage trades. We utilize sophisticated algorithms and
            specialized software capable of instantly identifying market
            discrepancies and executing trades in near real time. These
            technologies minimize human error and maximize the efficiency of our
            arbitrage strategies.
            <br />
            In addition, we leverage advanced data analytics and artificial
            intelligence to identify market patterns and make predictions that
            give us a strategic advantage. Our dedicated team of IT experts and
            financial analysts continuously works to optimize our systems to
            ensure maximum benefit for each of our clients.
            <br />
            By combining in-depth expertise, cutting-edge technology, and
            flexible strategy, we are ideally positioned to fully exploit the
            opportunities offered by arbitrage while simultaneously overcoming
            the challenges inherent in this complex trading method.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArbitrageDetails;
