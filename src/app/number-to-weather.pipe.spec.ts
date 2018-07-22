import { NumberToWeatherPipe } from './number-to-weather.pipe';

describe('NumberToWeatherPipe', () => {
  const pipe = new NumberToWeatherPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should map value 0 to Snowy', () => {
    expect(pipe.transform(0)).toBe('Snowy');
  });
  it('should map value 1 to Sunny', () => {
    expect(pipe.transform(1)).toBe('Sunny');
  });
  it('should map numbers or words other than 0 and 1 to default', () => {
    const textToTransform = 'valueGiven';
    expect(pipe.transform(textToTransform)).toBe(textToTransform);
  });
});
