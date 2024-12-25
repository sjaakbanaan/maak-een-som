import PropTypes from 'prop-types';

const ThemeChanger = ({ handleThemeChange }) => {
  const themes = ['blue', 'purple', 'red', 'pink'];

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
};

export default ThemeChanger;
