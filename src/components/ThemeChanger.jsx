import PropTypes from 'prop-types';

const ThemeChanger = ({ handleThemeChange, themes }) => {
  return (
    <div className="color-toggles">
      {themes.map((theme) => (
        <button
          key={theme}
          className={theme}
          onClick={() => handleThemeChange(theme)}
        />
      ))}
    </div>
  );
};

ThemeChanger.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
  themes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThemeChanger;
