function Card({ icon, title, children }) {
  return (
    <div className="rounded-lg py-6 bg-card text-center">
      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl text-center font-light mb-4">{title}</h3>
      <p className="text-muted-foreground text-center text-lg font-light">{children}</p>
    </div>
  );
}

export default function FeatureCards() {
  const iconClass = "w-5 h-5";
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 px-4">
      <Card
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="42"
            viewBox="0 0 25 42"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.13922 0H20.8537L15.2986 14.6203L25 14.5941L5.94869 42L10.4786 21.8304L0 21.8233L4.13922 0Z"
              fill="#5f1718"
            />
          </svg>
        }
        title="Anlageberatung"
      >
        Profitieren Sie von unserer Expertise bei der optimalen Gestaltung Ihres
        Investmentportfolios.
      </Card>
      <Card
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="42"
            viewBox="0 0 25 42"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.13922 0H20.8537L15.2986 14.6203L25 14.5941L5.94869 42L10.4786 21.8304L0 21.8233L4.13922 0Z"
              fill="#5f1718"
            />
          </svg>
        }
        title="Versicherungsanalyse"
      >
        Wir überprüfen Ihre Versicherungen, um sicherzustellen, dass Sie optimal
        abgesichert sind.
      </Card>
      <Card
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="42"
            viewBox="0 0 25 42"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.13922 0H20.8537L15.2986 14.6203L25 14.5941L5.94869 42L10.4786 21.8304L0 21.8233L4.13922 0Z"
              fill="#5f1718"
            />
          </svg>
        }
        title="Budgetplanung"
      >
        Gemeinsam erstellen wir einen maßgeschneiderten Budgetplan, um Ihre
        finanziellen Ziele zu erreichen.
      </Card>
    </div>
  );
}
