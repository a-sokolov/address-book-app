import React, {Component} from 'react';
import Footer from '@jetbrains/ring-ui/components/footer/footer';

export default class AppFooter extends Component {
    render() {
        return(
            <Footer
                className="stuff"
                left={[
                    [{url: 'https://www.sberbank.ru', label: 'АС Кассовый центр'}, ' от ООО Сбербанк'],
                    '03.000.00-c5 (build 275)'
                ]}
                center={[
                    [{copyright: 2012, label: ' ООО Сбербанк'}],
                    {url: 'https://www.sberbank.ru', label: 'Лицензионное соглашение', target: '_blank'}
                ]}
                right={[
                    {url: 'https://www.sberbank.ru', label: 'Обратная связь'}
                ]}
            />
        )
    }
}