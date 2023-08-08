def nb_year(p0, percent, aug, p):
    # p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
    result = 0
    while p0 < p :
        p0 += int(p0 * (percent/100) + aug)
        result +=1
    return result