
export default function Home() {
  return (
    <div className="flex flex-col items-center md:justify-center min-h-screen gap-4">
      <h1 className="text-6xl mt-8 md:mt-0">Our project</h1>
      <p className="text-lg md:w-1/2 w-5/6 text-justify">
        Ynnos the Ekamer is a challenging turn-based RPG game that is inspired by the Flash games <q>Sonny</q> and <q>Sonny 2</q>. Made in Unity, the objective of the game is to fight through stages of battles that test your strategic skills, in order to further an exciting story. To do this, you will level-up your characters, buy better equipment, unlock new abilities and create your own strategies.
        <br />
        <br />
        The game features maps, different abilities, different enemies and different items.
        <br />
        <br />
        Will you be a fiery attacker, preferring offense over defense? Will you prioritize defenses, bulldozing your way through any attack? Or will you focus debilitating your enemies, weakening them until they pose no threat at all? You decide!
      </p>
      <p className="text-lg w-1/2 mt-4 text-center">
        Check out our work on our <a className="text-blue-500 hover:text-blue-700 dark:text-blue-300" href="https://github.com/TeamDecisiontree">Github!</a>
      </p>
    </div>
  );
}
