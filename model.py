from pymagnitude import Magnitude

vectors = Magnitude('glove-lemmatized.magnitude')
cat_vector = vectors.query('cat')

res = []
defaultSent = "Cat loves to eat"
def similarWords(word):
    return vectors.most_similar(vectors.query(word), topn = 5)

def findSentenses(sentense = defaultSent, amount = 6):
    words = sentense.split()
#     synonims = [similarWords(word) for word in words]
#     synonimsDic = { word: similarWords(word) for word in enumerate(words) }

    resultList = [[], [], [], [], [], []] #prepare the storage of n empty arrays
    for word in words:
        synonims = vectors.most_similar(vectors.query(word), topn = amount);

        for index, synTuple in enumerate(synonims):
            a, b = synTuple
            resultList[index].append(a)

    result = [" ".join(sList) for sList in resultList]

    return result
