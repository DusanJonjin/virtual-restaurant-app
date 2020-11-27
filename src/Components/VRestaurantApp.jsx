import { Menu } from './Menu/Menu';
import { Tables } from './Tables/Tables';
import { Bills } from './Bills/Bills';

export function VRestaurantApp() {

  return (
    <div className="app-wrapper">
        <header>

        </header>
        <main>
            <Menu />
            <Tables />
            <Bills />
        </main>
    </div>
  );
}
