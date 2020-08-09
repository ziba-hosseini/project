
export interface UserConfiguration{
    userLanguage:Language;
}

export interface LanguageResources{
    resources:LanguageResourcevalues[];
}

export interface LanguageResourcevalues{
    key:string;
    values :LanguageResource[];
}

export interface LanguageResource{
    language:Language;
    value:string;
}

export interface Language{
    key:string;
}