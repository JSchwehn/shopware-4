/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 *
 * @category   Shopware
 * @package    Customer
 * @subpackage Detail
 * @copyright  Copyright (c) 2012, shopware AG (http://www.shopware.de)
 * @version    $Id$
 * @author shopware AG
 */

//{namespace name=backend/performance/main}

/**
 * Default fieldSet which is extended by all other fieldSets in this module
 *
 */
//{block name="backend/performance/view/tabs/settings/fields/base"}
Ext.define('Shopware.apps.Performance.view.tabs.settings.fields.Base', {
    /**
     * Define that the base field set is an extension of the Ext.form.FieldSet
     * @string
     */
    extend:'Ext.form.FieldSet',
    /**
     * List of short aliases for class names. Most useful for defining xtypes for widgets.
     * @string
     */
    alias:'widget.performance-tabs-settings-base',

    /**
     * Layout
     */
    layout: 'anchor',

    /**
     * Default settings for the child elements
     */
    defaults: {
        labelWidth: 155,
        labelStyle: 'font-weight: 700;',
        anchor: '100%'
    },

    /**
     * Hide elements by default, they will be shown once the users selects them in the navigation tree
     */
    hidden: true,
    border: false,

    /**
     * Required minimum width of the fieldSet
     */
    minWidth:155,

    /**
     * Helper method to create a descriptive text
     * @param html
     * @returns Ext.container.Container
     */
    createDecriptionContainer: function(html) {
        return  Ext.create('Ext.container.Container', {
            style: 'color: #999; font-style: italic; margin: 0 0 15px 0;',
            html: html
        });
    }

});
//{/block}