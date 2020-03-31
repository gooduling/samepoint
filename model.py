from pymagnitude import Magnitude


vectors = Magnitude('glove-lemmatized.magnitude')
cat_vector = vectors.query('cat')
print(cat_vector)
