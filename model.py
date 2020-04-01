from pymagnitude import Magnitude

vectors = Magnitude('glove-lemmatized.magnitude')

def findSentenses(sentense, amount = 5):
    words = sentense.split()
    resultList = [[], [], [], [], [], []] # prepare the storage of 5 empty lists
    for word in words:
        synonims = vectors.most_similar(vectors.query(word), topn = amount)

        for index, synonimTuple in enumerate(synonims):
            name, metric = synonim
            # put every of 5 synonims in the corresponding list
            resultList[index].append(name)

    result = [" ".join(sList) for sList in resultList]

    return result
