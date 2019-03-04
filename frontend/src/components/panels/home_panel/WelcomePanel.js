import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';
import { Link } from 'react-router-dom';

const WelcomePanel = () => (
    <div id="welcome_panel_content">
        <Header text="Explore Metropolian Energy Center Projects That Impact Your Area"/>
        <div className="block-text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p>
        </div>
        <SubHeader text="Here's How It Works"/>
        <IconRow icon_url="images/filter.svg" text="Filter the map based on an area and year range that you're interested in"/>
        <IconRow icon_url="images/location-marker.svg" text="Select projects on the map to see more details about each project and the impact they have on the area"/>
        <div className="btn-container">
            <Link to="/filters">
                <ActionButton text="Get Started"/>
            </Link>
        </div>
  </div>
);

export default WelcomePanel;