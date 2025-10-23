function Item({ title, children, icon }) {
  return (
    <div className="rounded-lg py-6 bg-card">
      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl text-center font-light mb-4">{title}</h3>
      <p className="text-muted-foreground text-center text-lg font-light">
        {children}
      </p>
    </div>
  );
}

export default function Strengths() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="51"
      viewBox="0 0 52 51"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.5763 4.78174H23.4275L22.6079 9.27891C19.118 10.0148 16.0341 11.8616 13.7387 14.4347L9.45384 12.8989L6.87943 17.3846L10.3408 20.347C9.81366 21.9693 9.52861 23.7018 9.52861 25.5013C9.52861 27.3 9.81344 29.0319 10.3402 30.6537L6.87698 33.6176L9.45138 38.1033L13.7379 36.5669C16.0335 39.1406 19.1177 40.9877 22.6082 41.7236L23.4275 46.2195H28.5763L29.3954 41.7249C32.8876 40.99 35.9736 39.1427 38.2703 36.5684L42.5521 38.1031L45.1265 33.6174L41.6681 30.6576C42.1957 29.0347 42.481 27.3015 42.481 25.5013C42.481 23.7002 42.1954 21.9662 41.6674 20.3426L45.1238 17.3844L42.5494 12.8987L38.2692 14.4329C35.9727 11.8592 32.8872 10.0125 29.3957 9.27766L28.5763 4.78174ZM25.9999 37.4534C32.6015 37.4534 37.9531 32.1018 37.9531 25.5003C37.9531 18.8988 32.6015 13.5472 25.9999 13.5472C19.3984 13.5472 14.0468 18.8988 14.0468 25.5003C14.0468 32.1018 19.3984 37.4534 25.9999 37.4534Z"
        fill="#5f1718"
      />
    </svg>
  );
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <Item
        title="Erfahrene Experten"
        icon={icon}
      >
       Profitieren Sie von unserem Fachwissen und langjähriger Erfahrung in der Finanzberatung für eine maßgeschneiderte Lösung.
      </Item>
      <Item title="Individuelle Beratung" icon={icon}>
        Wir nehmen uns Zeit, um Ihre Ziele zu verstehen und einen persönlichen Finanzplan zu entwickeln, der zu Ihnen passt.
      </Item>
      <Item title="Transparenz & Vertrauen" icon={icon}>
        Vertrauen Sie auf unsere ehrliche und transparente Arbeitsweise, um gemeinsam finanzielle Ziele erfolgreich zu erreichen.
      </Item>
    </div>
  );
}
