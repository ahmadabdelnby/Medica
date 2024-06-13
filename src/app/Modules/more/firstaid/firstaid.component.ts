import { Component } from '@angular/core';

@Component({
  selector: 'app-firstaid',
  templateUrl: './firstaid.component.html',
  styleUrls: ['./firstaid.component.css']
})
export class FirstaidComponent {
  cards = [
    {
      img: '../../../../assets/images/cata.jpg',
      title: 'catastrophic bleeding',
      text: 'Apply pressure – The first rule of bleed management is applying direct pressure to the wound. Use your hand, finger or knee if required to put enough pressure on the wound area to limit the bleeding. The leak is coming from an artery which is smaller in diameter than your finger, so focus on the area and get your (gloved) fingers in there, LOTS of pressure will be required to stem the flow. There is a lot of blood pressure to fight against, so press hard!'
    },
    {
      img: '../../../../assets/images/bre.webp',
      title: 'breathing',
      text: 'it is possible to determine the respiratory rate, inspect movements of the thoracic wall for symmetry and use of auxiliary respiratory muscles, and percuss the chest for unilateral dullness or resonance. Cyanosis, distended neck veins, and lateralization of the trachea can be identified. If a stethoscope is available, lung auscultation should be performed and, if possible, a pulse oximeter should be applied. Tension pneumothorax must be relieved immediately by inserting a cannula where the second intercostal space crosses the midclavicular line (needle thoracocentesis). Bronchospasm should be treated with inhalations. If breathing is insufficient, assisted ventilation must be performed by giving rescue breaths with or without a barrier device. Trained personnel should use a bag mask if available.'
    },
    {
      img: '../../../../assets/images/burn.jpg',
      title: 'Burns',
      text: 'Protect the burned person from further harm. If you can do so safely, make sure the person youre helping is not in contact with the source of the burn. For electrical burns, make sure the power source is off before you approach the burned person Make certain that burned person is breathing. If needed, begin rescue breathing if you know how. Remove jewelry, belts and other tight items, especially from the burned area and the neck. Burned areas swell quickly.  Cover the burn. Loosely cover the area with gauze or a clean cloth.  Raise the burned area. Lift the wound above heart level if possible.Watch for symptoms of shock. Symptoms include cool, clammy skin, weak pulse and shallow breathing.'
    },
    {
      img: '../../../../assets/images/pois.jpg',
      title: 'Poisoning',
      text: 'Take the following actions until help arrives: Swallowed poison. Remove anything remaining in the persons mouth. If the suspected poison is a household cleaner or other chemical, read the containers label and follow instructions for accidental poisoning. Poison on the skin. Remove any contaminated clothing using gloves. Rinse the skin for 15 to 20 minutes in a shower or with a hose.Poison in the eye. Gently flush the eye with cool or lukewarm water for 20 minutes or until help arrives. Button batteries. The small, flat batteries used in watches and other electronics — particularly the larger, nickel-sized ones — are especially dangerous to small children. A battery stuck in the esophagus can cause severe tissue burns. If you suspect that a child has swallowed one of these batteries, immediately take the child for an emergency X-ray to find its location. If the battery is in the esophagus, it will have to be removed. If it has passed into the stomach, its usually safe to allow it to pass on through the intestinal tract. Medicated patches. If you think a child got hold of medicated patches — adhesive products for transdermal drug delivery — carefully inspect the childs skin and remove any that are attached. Also check the roof of the mouth, where medicated patches can get stuck if the child sucks on them.Inhaled poison. Get the person into fresh air as soon as possible.If the person vomits, turn the persons head to the side to prevent choking.Begin CPR if the person shows no signs of life, such as moving, breathing or coughing.Call Poison Help at 800-222-1222 in the United States or your regional poison control center for additional instructions.Have somebody gather pill bottles, packages or containers with labels, and any other information about the poison to send along with the ambulance team.'
    },
    {
      img: '../../../../assets/images/pre.jpeg',
      title: 'pregnancy',
      text: 'If a pregnant person has collapsed and they are heavily pregnant in their third trimester, Check for Danger, check for Response, open the Airway and check for normal breathing. If they are unconscious and breathing normally, roll them onto their left hand side, keep checking they are breathing and phone an ambulance.If they are unconscious and not breathing normally, with less than 2 breaths in a 10 second period, you will need to start CPR. Ideally, if you have another person assisting you with the CPR, they should support the uterus (the bump) whilst the patient is lying on her back. This will take the pressure of their vena cava and help them maintain blood flow to their vital organs.If you haven’t got a second person, you can do help relieve the pressure on the vena cava by:placing a rolled-up blanket or wedge under the right side of their backmanually tilting the person’s hips and shoulders to the left'
    },
    {
      img: '../../../../assets/images/bli.webp',
      title: 'Draining Blisters',
      text: 'If a blister isnt too painful, try to keep it from breaking open. Unbroken skin over a blister may provide a natural barrier to bacteria, and it decreases the risk of infection. Cover the blister with a bandage or moleskin. Moleskin is a durable fabric that can help protect blisters in high-friction areas. Cut a piece of moleskin about 1 inch (2.5 centimeters) larger than your blister. Fold the nonsticky sides together and cut a half-circle thats about the size of your blister. When you unfold the moleskin, you have a hole in the middle thats about the size of your blister. Apply the moleskin over the blister, aligning your blister with the hole you made. Then cover the blister and moleskin with gauze. To relieve blister-related pain, drain the fluid while leaving the skin above the blister in place. If you have diabetes or poor circulation, or tend to get infections, take extra care to prevent infection.'
    },
    {
      img: '../../../../assets/images/eye.webp',
      title: 'removing debris from the eyes',
      text: 'Wash your hands with soap and water. Try to flush the object out of your eye with a gentle stream of clean, warm water. Use an eyecup or a small, clean drinking glass positioned with its rim resting on the bone at the base of your eye socket. Another way to flush a foreign object from your eye is to get into a shower and aim a gentle stream of lukewarm water on your forehead over the affected eye while holding your eyelid open. If youre wearing contact lenses, its best to remove the lens before or while youre irrigating the surface of the eye with water. Sometimes a foreign body can be stuck to the undersurface of the lens.'
    }
    ];


  get uniqueCards() {
    const seen = new Set();
    return this.cards.filter(card => {
      const duplicate = seen.has(card.title);
      seen.add(card.title);
      return !duplicate;
    });
  }

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    const cards = document.querySelectorAll('.firstaid-cards');
    cards.forEach(card => {
      const cardTitle = card.querySelector('.card-title')!.textContent!.toLowerCase();
      if (cardTitle.includes(query)) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
