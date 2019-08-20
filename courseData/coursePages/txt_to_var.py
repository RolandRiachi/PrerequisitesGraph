import json

def txt_to_tar_dict(src):
    '''
    Convert text file with course info into dictionary
    File line format: COURSE TITLE/PREREQ1,PREREQ2,.../COREQS/RESTRICTIONS
    '''

    out = {}
    for course in src:
        title, prereqs, coreqs, restricts = course.strip().split('/')

        #Mark no courses listed as empty lists, otherwise convert strings into list
        prereqs = [] if prereqs == '' else prereqs.split(',')
        coreqs = [] if coreqs == '' else coreqs.split(',')
        restricts = [] if restricts == '' else restricts.split(',')

        out[title] = {
        'prerequisites': prereqs,
        'corequisites': coreqs,
        'restrictions': restricts
        }

    return out

def tar_to_src_dict(tar_dict):
    '''
    Convert dictionary with courses as targets into dictionary with courses as sources
    '''

    out = dict()
    def init_course(d, c):
        d[c] = {
        'prerequisites': [],
        'corequisites': [],
        'restrictions': []
        }

    #Iterate over every course
    for course in tar_dict:
        #Add course in src_dict
        if course not in out:
            init_course(out, course)

        #Iterate over data (prereqs, coreqs, restricts)
        for data in tar_dict[course]:
            #Itereate over every course listed in first course's data
            for c in tar_dict[course][data]:
                #If haven't seen c yet, add it to src_dict
                if c not in out:
                    init_course(out, c)

                #Don't want to write wrong courses to dict
                if c[:4] == course[:4]:
                    out[c][data].append(course)

    return out

if __name__ == '__main__':
    sbj = 'bio'
    txt_file = sbj + '_courses.txt'
    tar_file = sbj + '_tar.json'
    src_file = sbj + '_src.json'

    with open(txt_file, 'r') as src, open(tar_file, 'w+') as t, open(src_file, 'w+') as s:
        tar_dict = txt_to_tar_dict(src)
        json.dump(tar_dict, t, ensure_ascii=False, indent=4)
        json.dump(tar_to_src_dict(tar_dict), s, ensure_ascii=False, indent=4)
